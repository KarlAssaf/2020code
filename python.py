import numpy as np
import os
import cv2 as cv
import tensorflow as tf
import random 
traindata = []
dir = os.listdir("/home/carl/nodelearn/imgs")
for img in dir:
        if (img.split(".")[0][0] == "s"):
            label = [0 , 1] 
        elif (img.split(".")[0][0] == "i"):
            label = [1 , 0]
        elif (img.split(".")[0][0] == "f"):
            label = [1 , 1]
        img = cv.resize(cv.imread("/home/carl/nodelearn/imgs/" + img , cv.IMREAD_GRAYSCALE) , (50 , 50))
        traindata.append([np.array(img) , np.array(label)])
        print([np.array(img) , np.array(label)])
random.shuffle(traindata)
nnetwork = tf.keras.Sequential([
tf.keras.layers.InputLayer(input_shape=(50 , 50) , batch_size=32),
tf.keras.layers.Dense(300 , activation=tf.nn.relu),
tf.keras.layers.Flatten(),
tf.keras.layers.Dense(2 , activation=tf.nn.relu)
])
input = []
output = []
for i in traindata:
    input.append(i[0])
    output.append(i[1])
nnetwork.compile(loss="mean_squared_error" , optimizer="sgd")
nnetwork.fit({"input_1": np.array(input)} , {"dense_2": np.array(output)} , show_metric=True , epochs=6)

cars = []
for img in os.listdir("/home/carl/Downloads/car"):
        cars.append(cv.resize(cv.imread("/home/carl/Downloads/car/" + img , cv.IMREAD_GRAYSCALE)) , (50 , 50))
nnetwork.predict(cars[0])
