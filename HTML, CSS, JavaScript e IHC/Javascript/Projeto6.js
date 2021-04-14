var nota_total = 0;
for(i = 0; i <= 365; i ++)
{
nota_total = nota_total + Math.round(Math.random() * 10)
}
var media365 = nota_total / 365; 
document.write(Math.round(media365))