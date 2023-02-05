2023.02.03 PKNU AI Departament Khasanova Nodira
                Professor Shin Boog Ki Tomonidan berilga vazifalar
                
                
                      1 - vazifa
Savol:

How to predict/guess the weight of a person of H and S, i.e., what is W = f(H, S) ? 
- What is the input vector x (in bold)?
- what is y
- what kind/family of function do you choose? define/represnet/write it (using a set of
parameters).
*- find the function (it's an approximation) - what are the parameters?
Now the prediction part:
given a new data H=174 and  S' =0 (or ×'=(174, 0), guess the persons' weight W = ? 
- Given another data ×" = [180, 0], W" = ?


Javob:

For the function, we can choose a linear regression model as it is a simple and straightforward approach to modeling the relationship between height and weight. The linear regression model can be represented as y = w0 + w1 * H + w2 * S, where w0, w1, and w2 are the parameters that need to be estimated from the data.

To find the parameters, we need to have a labeled dataset with height, weight, and any other relevant information (S). We can then use an optimization algorithm such as gradient descent to find the values of w0, w1, and w2 that minimize the mean squared error between the predicted weight and the actual weight.

Given the new data H = 174 and S' = 0, we can plug these values into the estimated linear regression model to predict the person's weight W = w0 + w1 * 174 + w2 * 0.

Given another data ×" = [180, 0], W" = w0 + w1 * 180 + w2 * 0.
                           
                
                      2 - vazifa
 Savol:
 
 Sklearn.datasets:
                   diabetes = datasets.load_diabetes()

                   X= diabetes.data[:, np.newaxis, 2]       # (442, 1)  행렬   <-> (442,)                                         
                   X2 = diabetes.data: [:,0:3]                     # (442, 3) 행렬
                   y = diabetes.target                                                                                                                    b. Solve the similar problem:
-                                                                                                                                                                        
-                                                                                                                                                                        
-                                                                                                                                                                                                             -                                                                                                                                                                      
                                                                                                                                                                         
-  x' = np.array(diabetes.data[23, 2])   -> y' = ?
-  x''= diabetes.data[23, 0:3]                -> y" = ?

   Javob:

 The load_diabetes function from the sklearn.datasets module loads the diabetes dataset, which is a sample dataset for regression analysis.

The dataset contains 10 features for 442 patients. X is a matrix with shape (442, 1) that contains only the third feature of the original dataset, and X2 is a matrix with shape (442, 3) that contains the first three features of the original dataset. y is a vector with shape (442,) that contains the target

Given thex' = np.array(diabetes.data[23, 2]),x' as a 2D arraypredict method

Given thex'' = diabetes.data[23, 0:3],x'' as a 2D arraypredict method
                        