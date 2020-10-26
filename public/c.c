#include <stdio.h>
 
void fibnot(int n1, int n2, int fibnot_v[]){
    if (fibnot_v[n1] == -2) {
      return;
    } else {
      
  }
}

int main() {
    int fibnot_v[100], n1, n2;
    scanf("%i", &n1);
    scanf("%i", &n2);
    int f[100];
      f[0] = 1;
      f[1] = 1;

      for(int i = 2; i < n2; i++) {      
        f[i] = f[i-1] + f[i-2];
      }

      for(int i = 0; i < n2; i++) {      
        fibnot_v[i] = i;
      }
      
      int k = 0;
      for(int i = 0; i < n2; i++){
        for(int j = 0; j < n2; j++) {
          if(f[i] == fibnot_v[j]) {
            fibnot_v[j] = -1;
          }
        }
      }

      int a = 0;
      for(int i = n1+1; i < n2; i++) {
        if(fibnot_v[i] != -1) {
          fibnot_v[a++] = fibnot_v[i];
        }
      }
      fibnot_v[a] = -2;
      
    fibnot(n1, n2, fibnot_v);

    
    return 0;
}