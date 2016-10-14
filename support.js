var documentWidth=800;

var pixelContainerWidth=documentWidth;

var pixelSidelength=0.01*documentWidth;

var pixelSpace=0.001*documentWidth;

function getPosTop(i,j)
{
	return pixelSpace+i*(pixelSidelength+pixelSpace);
	
}

function getPosLeft(i,j)
{
	return pixelSpace+j*(pixelSidelength+pixelSpace);
}

function getColor(number)
{
	switch(number)
	{
		case 1: return "rgba(43,181,126,1)";  break;
		case 2: return "rgba(43,181,130,1)";  break;
		case 3: return "rgba(43,181,134,1)"; break;
		case 4: return "rgba(43,181,138,1)";  break;
		case 5: return "rgba(43,181,142,1)"; break;
		case 6: return "rgba(43,181,146,1)";  break;
		case 7: return "rgba(43,181,150,1)";  break;
		case 8: return "rgba(43,181,154,1)";  break;
		case 9: return "rgba(43,181,158,1)";  break;
		case 0: return "rgba(43,181,162,1)";  break;
	}
	return "red";
}