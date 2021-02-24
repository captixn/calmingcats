gci -File .\ignore\photos | foreach { 
	magick $_.fullname -resize 'x1500' -auto-orient -strip -define jpeg:extent=200KB  ".\public\cats\$_"
}