#include <iostream>
#include <string>
using namespace std;

class Connection {
private:
    string userId;
    string ipAddress;
    bool isConnected;

public:
    Connection(string id, string ip) {
        userId = id;
        ipAddress = ip;
        isConnected = false;
    }

    void connect() {
        isConnected = true;
        cout << "User " << userId << " connected from " << ipAddress << endl;
    }

    void disconnect() {
        isConnected = false;
        cout << "User " << userId << " disconnected" << endl;
    }

    bool getStatus() {
        return isConnected;
    }
};

int main() {
    Connection user1("1234", "192.168.1.5");
    Connection user2("5678", "192.168.1.7");

    user1.connect();
    user2.connect();

    user1.disconnect();

    return 0;
}