# Essential profile for the same signed Arn0 app ID. The standard builder is retained.
param([Parameter(Mandatory=$true)][string]$UpstreamDir,[Parameter(Mandatory=$true)][string]$OutputFile)
$ErrorActionPreference='Stop'
$src=Join-Path (Resolve-Path -LiteralPath $UpstreamDir).Path 'src'
$wgt=[IO.Path]::GetFullPath($OutputFile)
$null=New-Item -ItemType Directory -Path (Split-Path -Parent $wgt) -Force
$utf8=[Text.UTF8Encoding]::new($false)
$parts=@('config.local.js','apps.js','inputs.js','essential.js')
foreach($part in $parts){node --check (Join-Path $src ('js/'+$part));if($LASTEXITCODE -ne 0){throw ('Invalid JavaScript: '+$part)}}
$bundle=($parts | ForEach-Object {Get-Content -LiteralPath (Join-Path $src ('js/'+$_)) -Raw}) -join "`n;`n"
$zip=[IO.Compression.ZipArchive]::new([IO.File]::Open($wgt,[IO.FileMode]::Create),[IO.Compression.ZipArchiveMode]::Create)
try{
 foreach($entry in @(@{Name='config.xml';Path='config.xml'},@{Name='icon.png';Path='icon.png'},@{Name='index.html';Path='essential.html'})){
  $null=[IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip,(Join-Path $src $entry.Path),$entry.Name,[IO.Compression.CompressionLevel]::Optimal)
 }
 $entry=$zip.CreateEntry('js/essential.bundle.js',[IO.Compression.CompressionLevel]::Optimal)
 $writer=[IO.StreamWriter]::new($entry.Open(),$utf8)
 try{$writer.Write($bundle)}finally{$writer.Dispose()}
 foreach($brand in @('netflix','primevideo','youtube','disneyplus')){
  $name='img/tiles/'+$brand+'.svg'
  $null=[IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip,(Join-Path $src $name),$name,[IO.Compression.CompressionLevel]::Optimal)
 }
}finally{$zip.Dispose()}
$hash=(Get-FileHash -LiteralPath $wgt -Algorithm SHA256).Hash
($hash+'  arn0-launcher.wgt') | Set-Content -LiteralPath ($wgt+'.sha256') -Encoding ascii
[pscustomobject]@{Profile='Essential';Bytes=(Get-Item -LiteralPath $wgt).Length;SHA256=$hash;Signed=$false;InputScripts=$parts.Count;RuntimeJavaScriptFiles=1} | ConvertTo-Json -Compress
