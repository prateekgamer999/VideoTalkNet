interface User {
    id: string;
    name: string;
    ipAddress: string;
    isOnline: boolean;
}

interface VideoCall {
    id: string;
    caller: User;
    receiver: User;
    startTime: Date;
    isActive: boolean;
}

interface MediaStream {
    video: boolean;
    audio: boolean;
}

class CallManager {
    private calls: VideoCall[] = [];

    startCall(caller: User, receiver: User): VideoCall {
        const call: VideoCall = {
            id: Math.random().toString(36).substr(2, 9),
            caller: caller,
            receiver: receiver,
            startTime: new Date(),
            isActive: true
        };
        
        this.calls.push(call);
        console.log(`Call started: ${caller.name} -> ${receiver.name}`);
        return call;
    }

    endCall(callId: string): void {
        const call = this.calls.find(c => c.id === callId);
        if (call) {
            call.isActive = false;
            console.log(`Call ended: ${callId}`);
        }
    }

    getActiveCalls(): VideoCall[] {
        return this.calls.filter(c => c.isActive);
    }
}