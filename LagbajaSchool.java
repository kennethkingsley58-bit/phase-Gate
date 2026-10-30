import java.util.Scanner;
import java.util.Arrays;

	public class LagbajaSchool{
		public static void main(String[] args){
		
		Scanner input = new Scanner(System.in);
		
		System.out.println("How many student do you have?: ");
		int numberOfStudent = input.nextInt();
		
		System.out.println("How many subject do they offer?: ");
		int numberOfSubject = input.nextInt();
		
		System.out.println("Saved succesfully....");
		
		int[][] studentScores = new int[numberOfStudent][numberOfSubject];
		System.out.println(Arrays.deepToString(studentScores));
		
		
		
			for(int index = 0; index < numberOfStudent; index++){
				for (int count = 0; count < numberOfSubject; count++){
				System.out.println("Enter the scores of Student" + (index+1));
					
					System.out.println("Enter score for " + "Subject" + (count+1) + ":"); 
					int scores = input.nextInt();
					
					while(scores<0 || scores>100){
					System.out.println("Enter a valid score from 1 to 100");
					scores = input.nextInt();
					
					System.out.println("Saving>>>>>>");
					System.out.println("Saved succesfully...");
				
					
					
					
					}
						studentScores[index][count] = scores;
				}
			}
			
			for(int index = 0; index < numberOfStudent; index++){
				System.out.println("student " + (index+1) + ": " + Arrays.toString(studentScores[index]));
				
			}
			
			
		int[] studentTotal = new int[numberOfStudent];
		
			for(int index = 0; index < numberOfStudent; index++){
				int total = 0;
					for (int count = 0; count < numberOfStudent; count++){
						total += studentScores[index][count];			
			
					studentTotal[index] = total;
					double average = total/numberOfSubject;
						
						System.out.println("Student" + (index+1) + " Total: " + total);
						System.out.println("Student" + (index+1) + " Average: " + average);
			}			
					
		}		
					
	}
		
	}
	
