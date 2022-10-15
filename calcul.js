let result = document.getElementById("Inputext");

let calculate = (number) =>
{
    result.value += number;
}

let  = Equal = () =>
{
    try
    {
        result.value = eval(result.value)
    }
    catch(err)
    {
        alert("Enter the valid Input");
    }
}

function remv()
{
    result.value = "";
}

function del()
{
    result.value = result.value.slice(0,-1);
    result.value.slice
}

function fact()
{
    let i, num, f;
    f = 1
    num = result.value;
    for (i = 1; i <= num; i++)
    {
        f = f*i;
    }
    i = i-1;
    result.value = f;
}

function square()
{
    result.value = Math.pow(result.value, 2);
}

function pow()
{
    result.value = Math.pow(result.value, 3);
}

function sqrt()
{
    result.value = Math.sqrt(result.value, 1/2);
}

function tan()
{
    result.value = Math.tan(result.value);
}

function cos()
{
    result.value = Math.cos(result.value);
}

function sin()
{
    result.value = Math.sin(result.value);
}
