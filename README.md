#wallet lib usage

##Install redis on ubuntu
    - sudo apt install redis-server
    - sudo nano /etc/redis/redis.conf
        - Set 'supervised' to 'systemd'
    - sudo systemctl restart redis.service
    - If needed set authentication on redis
