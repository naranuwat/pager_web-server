//ลบฟังก์ชัน loadMQTT() เนื่องจากเปลี่ยนไปโหลดผ่านไฟล์ HTML แล้ว

let client;

//ลบคำสั่ง export ออกจากหน้าคำว่า async function startMQTT() และ function sendMessage(data)
async function startMQTT() {
    const MQTT_BROKER = 'wss://s1ad7df7.ala.asia-southeast1.emqxsl.com:8084/mqtt';
    client = mqtt.connect(MQTT_BROKER, {
        username: 'Pager_Project',
        password: 'CE_05',
        clientId: 'web_pager_' + Math.random().toString(16).substring(2, 10)
    });

    client.on('connect', () => {
        console.log('MQTT Broker Connected');
    });

    client.on('error', () => {
        console.log('MQTT Connection Failed');
    });
}

function sendMessage(data){
    client.publish(
            'Pager/webmsg/',
            (JSON.stringify(data))
        );
    console.log(data);
    return 1;
}
