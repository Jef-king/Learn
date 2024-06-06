# Big O Notation

*  O(1) : Constant Time
*  O(log n) : Logarithmic Time
*  O(n) : Linear Time
*  O(n log n) : Linearithmic Time

*  O(n^2) : Quadratic Time
*  O(2^n) : Exponetial Time
*  O(n!) : Factorial Time


## Linear Search *O(n)*

```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        System.out.println("Enter the array length");
        int n=in.nextInt();
        int arr[]=new int[n];
        System.out.println("Enter the array elements");
        for(int i=0; i<n; i++) {
            arr[i]=in.nextInt();
        }
        System.out.println("Enter the number to find");
        int k=in.nextInt();
        in.close();
        int result=linearSearch(arr, n, k);
        System.out.println((result !=-1)?"Element is found at Index : " +result : "Element not found");
    }

    static int linearSearch(int arr[], int n, int k) {
        for(int i=0; i<n; i++) {
            if(k==arr[i]) {
                return i;
            }
        }
        return -1;
    }
}
```
## Binary Search *O(log n)*

### Binary Search with Loop
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        System.out.println("Enter the array length");
        int n=in.nextInt();
        int arr[]=new int[n];
        System.out.println("Enter the array elements");
        for(int i=0; i<n; i++) {
            arr[i]=in.nextInt();
        }
        System.out.println("Enter the number to find");
        int k=in.nextInt();
        in.close();
        int result=binarySearch(arr, n, k);
        System.out.println((result !=-1)?"Element is found at Index : " +result : "Element not found");
    }

    static int binarySearch(int arr[], int n, int k) {
        int left=0;
        int right=n-1;
        while(left<=right) {
            int mid=(left+right)/2;
            if(arr[mid]==k) {
                return mid;
            }
            else if(arr[mid] < k) {
                left=mid+1;
            }
            else if(arr[mid] > k) {
                right=mid-1;
            }
        }
        return -1;
    }
}
```

### Binary Search with Recursion
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        System.out.println("Enter the array length");
        int n=in.nextInt();
        int arr[]=new int[n];
        System.out.println("Enter the array elements");
        for(int i=0; i<n; i++) {
            arr[i]=in.nextInt();
        }
        System.out.println("Enter the number to find");
        int k=in.nextInt();
        in.close();
        int result=binarySearch(arr, k, 0, n-1);
        System.out.println((result !=-1)?"Element is found at Index : " +result : "Element not found");
    }

    static int binarySearch(int arr[], int k, int left, int right) {
        if(left<=right) {
            int mid=(left+right)/2;
            if(arr[mid]==k) {
                return mid;
            }
            else if(arr[mid] < k) {
                return binarySearch(arr, k, mid+1, right);
            }
            else if(arr[mid] > k) {
                return binarySearch(arr, k, left, mid-1);
            }
        }
        return -1;
    }
}
```
## Sort
### Bubble Sort
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
      Scanner in=new Scanner(System.in);
        System.out.println("Enter the array length");
        int n=in.nextInt();
        int arr[]=new int[n];
        System.out.println("Enter the array elements");
        for(int i=0; i<n; i++) {
            arr[i]=in.nextInt();
        }
        in.close();
        int result[]=bubbleSort(arr, n);
        for(int i=0; i<n; i++) {
            System.out.print(result[i]+" ");
        }
    }
  static int[] bubbleSort(int []arr,int n){
    for(int i=0;i<n;i++){
      for(int j=0;j<n;j++){
        if(arr[i]<arr[j]){
          int temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
      }
    }
    return arr;
  }
}
```
### Selection Sort
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
      Scanner in=new Scanner(System.in);
        System.out.println("Enter the array length");
        int n=in.nextInt();
        int arr[]=new int[n];
        System.out.println("Enter the array elements");
        for(int i=0; i<n; i++) {
            arr[i]=in.nextInt();
        }
        in.close();
        int result[]=selectionSort(arr, n);
        for(int i=0; i<n; i++) {
            System.out.print(result[i]+" ");
        }
    }
  static int[] selectionSort(int []arr,int n){
    int step=0;
    for(int i=0;i<n-1;i++){
      for(int j=i+1;j<n;j++){
        if(arr[i]<arr[j]){
          int temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
        step++;
      }
    }
    System.out.println(step);
    return arr;
  }
}
```
