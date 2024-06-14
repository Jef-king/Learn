# Java Problems

1. *A Robbery*

Robin the thief wants to loot money from a society having n houses in a single line.

He is a weird person and follows a certain rule when looting the houses.

According to the rule, he will never loot two consecutive houses.

At the same time, he wants to *maximize* the amount he loots.

The thief knows which houses has what amount of money but is unable to come up with an optimal looting strategy.

He asks for your help to find the maximum money he can get if he strictly follows the rule. Each house has a[i] amount of money present in it.

*Input Format*

The first input line contains integer n , the length of array a.

The following line contains n space separated integers representing a[i] which is the amount of money in each house.

```
import java.util.*;

public class Main {
    public static void main(String[] args) {
      Scanner in = new Scanner(System.in);
      int n=in.nextInt();
      int [] arr=new int[n];
      for(int i=0;i<n;i++){
        arr[i]=in.nextInt();
      }
      int result=helpRobin(arr, n);
      System.out.println(result);
  }
  static int helpRobin(int arr[],int n){
    if(n==0){
      return 0;
    }
    if(n==1){
      return arr[1];
    }
    int []dp=new int[n];
    dp[0]=arr[0];
    dp[1]=Math.max(arr[0],arr[1]);
    for(int i=2;i<n;i++){
      dp[i]=Math.max(arr[i]+dp[i-2],dp[i-1]);
    }
    return dp[n-1];
    
  }
}
```

*Output Format*

Return one integer - the maximum amount Robin can loot.
