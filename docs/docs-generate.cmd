jsduck-6.0.0-beta.exe --config docs-config.json
if "x%DIR_DOCS%" == "x" (
	set "DIR_DOCS=R:\"
)
xcopy out %DIR_DOCS%apache /b /e /y /r /i
exit /B 0

rem jsduck-6.0.0-beta --export=full ../src/js -o export/vGate.4.0.0.out 
