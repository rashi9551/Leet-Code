    let rep=0
    for(i=0;i<grid.length;i++)
    {
        if(set[i]!=i+1 && flag==false)
        {
            miss=i+1
            flag=true
            
        }
        if(grid[i]==grid[i+1])
        {
            rep=grid[i]
          
        }
    }
    return [rep,miss]
};
