function generateit()
{
    return"<input type='text'><button>Remove</button>";
}
function removeit(btn)
{
    document.getElementById("box").removeChild(btn.parentNode);
}