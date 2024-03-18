import keyboard
import random
import time
import pyautogui
import threading

# 初始化一个标志变量用于控制程序运行
clicking_active = False

def start_clicking():
    global clicking_active
    clicking_active = True
    while clicking_active:
        x_coordinate = random.randint(1110, 1160)
        y_coordinate = random.randint(794, 836)
        try:
            pyautogui.moveTo(x_coordinate, y_coordinate)
            time.sleep(3)
        except Exception as e:
            print(f"点击操作遇到异常: {e}")
            clicking_active = False

def on_press(key):
    if key.name == '1':  
        # 执行移动
        t = threading.Thread(target=start_clicking)
        t.start()
    elif key.name == 'esc':  
        # 停止移动
        global clicking_active
        clicking_active = False
    elif key.name == '2':  
        # 查看当前鼠标位置
        print(pyautogui.position())

# 开始监听键盘事件
if __name__ == '__main__':
    keyboard.on_press(on_press)
    # 添加以下代码来保持程序运行
    try:
        while True:
            time.sleep(1)  # 阻塞主循环，防止程序立即退出
    except KeyboardInterrupt:
        print("检测到中断信号，正在退出...")