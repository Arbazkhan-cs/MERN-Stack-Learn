// # include <stdio.h>
// void main(){
//     int i, j;
//     int matrix[3][3], transpose[3][3];
//     for(int i=0; i<3; i++){
//         for(int j=0; j<3;j++){
//             printf("Enter The Values For The Matrix[%d, %d]: ", i, j);
//             scanf("%d", &matrix[i][j]);
//             transpose[j][i] = matrix[i][j];
//         }
//     }
//     printf("Matrx: \n");
//     printf("[%d ", matrix[0][0]);
//     printf("%d ", matrix[0][1]);
//     printf("%d\n", matrix[0][2]);
//     printf("%d ", matrix[1][0]);
//     printf("%d ", matrix[1][1]);
//     printf("%d\n", matrix[1][2]);
//     printf("%d ", matrix[2][0]);
//     printf("%d ", matrix[2][1]);
//     printf("%d]\n\n", matrix[2][2]);

//     printf("Transpose Matrix: \n");
//     printf("[%d ", transpose[0][0]);
//     printf("%d ", transpose[0][1]);
//     printf("%d\n", transpose[0][2]);
//     printf("%d ", transpose[1][0]);
//     printf("%d ", transpose[1][1]);
//     printf("%d\n", transpose[1][2]);
//     printf("%d ", transpose[2][0]);
//     printf("%d ", transpose[2][1]);
//     printf("%d]\n", transpose[2][2]);
// }


# include <stdio.h> 
struct student{
    char name[20];
    int age;
    int marks;
};
void main(){
    struct student s[5];
    FILE *fptr = fopen("records.txt", "w");
    fprintf(fptr, "Students\t\tAge\t\tMarks");


    for(int i = 0; i<5; i++){
        printf("Enter The Name Of The %d Student: ", i);
        scanf("%s", s[i].name);

        printf("Enter The age Of The %d Student: ", i);
        scanf("%d", &s[i].age);

        printf("Enter The marks Of The %d Student: ", i);
        scanf("%d", &s[i].marks);

        fprintf(fptr, "%s\t\t%d\t\t%d\n", s[i].name,s[i].age, s[i].marks);
    }

    fclose(fptr);
}