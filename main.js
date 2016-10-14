
var k;
var b;

$(document).ready(function()
{
	init();
	setpoint();
	DDA();
	$("#set").click(function()
	{
		clear();
		setpoint();
		DDA();
	})
});

function init()
{
	for(i=0;i<101;i++)
		for(j=0;j<101;j++)
		{
			var pixel=$("#pixel-"+i+"-"+j);
				pixel.css('top',getPosTop(i,j));
				pixel.css('left',getPosLeft(i,j))
		}
	for(i=0;i<101;i++){
		$("#pixel-50-"+i).css("background-color","rgba(240,82,127,1)");
		$("#pixel-"+i+"-50").css("background-color","rgba(68,110,235,1)");
		}	
}
function setpoint()
{
	k=$("input[name='k-value']").val();
	console.log(k);
	b=$("input[name='b-value']").val();
	console.log(b);
}
function clear()
{
	
	for(i=0;i<101;i++)
		for(j=0;j<101;j++)
		{
			var pixel=$("#pixel-"+i+"-"+j);
				pixel.css('background-color',"rgba(152,224,195,0.2)");
		}
		for(i=0;i<101;i++){
		$("#pixel-50-"+i).css("background-color","rgba(240,82,127,1)");
		$("#pixel-"+i+"-50").css("background-color","rgba(68,110,235,1)");
		}	
}
						function DDA()
						{
							var relx;
							var rely;
							if(k>=0&&k<=1)
							{
								for(i=(-50);i<50;i++)
								{
										relx=changex(i);
										rely=changey(Math.round(i*k)+parseInt(b));
										console.log("x:"+relx+"|y:"+rely);
										draw(relx,rely);
								}
							}
							if(k>1)
							{
								for(i=(-50);i<50;i++)
								{
									relx=changex(i);
									rely=changex(tmp=(Math.round((i-b)/k)));
									draw(100-rely,relx);
								}
							}
								if(k<=-1)
								{
									for(i=(-50);i<50;i++)
									{
										relx=changex(i);
										rely=changex(Math.round((i-b)/k));
										draw(100-rely,relx);
									}
								}
							if(k>-1&&k<0)
							{
									for(i=(-50);i<50;i++)
									{
										relx=changex(i);
										rely=changey(Math.round(i*k)+parseInt(b));
										draw(relx,rely);
									}
							}
						}
						function draw(x,y)
						{
							var randnum=Math.ceil(Math.random()*10);
							$("#pixel-"+y+"-"+x).css("background-color",getColor(randnum));
						}	
						function changex(i)
						{
								if((k>=0&&k<=1))
								{
								if(i>=0&&i<=50)
								{
									return i+50;
								}else if(i<0&&i>=-50)
								{
									return 50-(-i);
								}
								}
								//只有第一个象限并且当1>=k>0的时候是计算过的，其他情况都是坐标变换得来的
							if(k>1)
							{
								if(i>0)
								{
									return 50-i;
								}
								else
								{
									return 50+(-i);
								}
							}
								if(k<=-1)
								{
									if(i>0)
									{
										return 50-i;
									}
									else
									{
										return 50+(-i);
									}
								}
							if(k>-1&&k<0)
							{
								if(i>=0&&i<=50)
								{
									return i+50;
								}else if(i<0&&i>=-50)
								{
									return 50-(-i);
								}
							}
						}
						function changey(j)
						{
								if((k>=0&&k<=1))
										{
										console.log("test"+j);
										if(j<0&&j>=-50)
										{
											return 50+(-j);
										}
										else if(j>=0&&j<=50)
										{
											return 50-j;
										}
										}
							if(k>1)
							{
								if(j<0&&j>=-50)
							{
								return 50+j;
							}
							else if(j>=0&&j<=50)
							{
								return 50+j;
							}
							}
								if(k<=-1)
								{
										if(j<0&&j>=-50)
								{
									return 50+j;
								}
								else if(j>=0&&j<=50)
								{
									return 50+j;
								}
								}
							if(k>-1&&k<0)
							{
								if(j<0&&j>=-50)
								{
									return 50+(-j);
								}
								else if(j>=0&&j<=50)
								{
									return 50-j;
								}
							}
						}//为了区分，以上是DDA算法画直线的代码//1220432426@qq.com//欢迎一起努力
