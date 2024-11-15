//Length of longest word in a String
function findLongestWordLength(str)
{
  
    let arr=str.split(" ")
    let res=0;
    for(let i=0;i<arr.length;i++)
    {
      res=Math.max(res,arr[i].length);
    }
    return res;
}