# Convert Three.js to 4.js in examples folder
Write-Host "Converting Three.js to 4.js in examples folder..."

# Get all HTML and JS files in examples
$files = Get-ChildItem "examples" -Include "*.html", "*.js" -Recurse

$totalFiles = $files.Count
$processed = 0

foreach ($file in $files) {
    $processed++
    Write-Progress -Activity "Converting files" -Status "Processing $($file.Name)" -PercentComplete (($processed / $totalFiles) * 100)
    
    try {
        $content = Get-Content $file.FullName -Raw -ErrorAction Stop
        
        # Convert imports
        $content = $content -replace "import \* as THREE from 'three'", "import * as FOUR from '4js'"
        $content = $content -replace "import \* as THREE from `"three`"", "import * as FOUR from `"4js`""
        $content = $content -replace "import \* as THREE from 'three/webgpu'", "import * as FOUR from '4js/webgpu'"
        $content = $content -replace "import \* as THREE from `"three/webgpu`"", "import * as FOUR from `"4js/webgpu`""
        
        # Convert other three imports
        $content = $content -replace "from 'three'", "from '4js'"
        $content = $content -replace "from `"three`"", "from `"4js`""
        $content = $content -replace "from 'three/", "from '4js/"
        $content = $content -replace "from `"three/", "from `"4js/"
        
        # Convert THREE namespace to FOUR
        $content = $content -replace "\bTHREE\.", "FOUR."
        $content = $content -replace "\bTHREE\[", "FOUR["
        
        # Convert comments and text references
        $content = $content -replace "Three\.js", "4.js"
        $content = $content -replace "three\.js", "4.js"
        $content = $content -replace "THREE\.js", "FOUR.js"
        
        Set-Content $file.FullName $content -ErrorAction Stop
    }
    catch {
        Write-Warning "Failed to process $($file.FullName): $($_.Exception.Message)"
    }
}

Write-Host "Conversion complete! Processed $totalFiles files."
