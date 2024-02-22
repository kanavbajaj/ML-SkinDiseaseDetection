from ultralytics import YOLO


model = YOLO('yolov8n.pt')


data_path = 'C:/Users/kanav/my-env/Yolo_app/Datsets/data.yaml'


epochs = 3


model.train(data=data_path, epochs=epochs)

