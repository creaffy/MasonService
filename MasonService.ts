import { EventEmitter } from "node:events";
import { RawData, WebSocket } from "ws";

export class MasonService extends EventEmitter {
    private socket: WebSocket;

    public constructor() {
        super();

        this.socket = new WebSocket(
            "wss://mason-ipv4.zombsroyale.io/gateway/?EIO=4&transport=websocket"
        );

        this.socket.on("error", (err: Error) => {
            this.emit("error", err);
        });

        this.socket.on("open", () => {
            this.emit("open");
        });

        this.socket.on("close", (code: number, reason: Buffer) => {
            this.emit("close", code, reason);
        });

        this.socket.on("message", (data: RawData, isBinary: boolean) => {
            if (!isBinary && data.toString().startsWith("42")) {
                this.emit("any", data);
                const parsed: any = JSON.parse(data.toString().slice(2));
                this.emit(parsed[0], parsed[1]);
            }
        });
    }

    public SendPing(): void {
        this.socket.send("2");
    }

    public AcceptFriendRequest(friendCode: string): void {
        this.socket.send(`42["acceptFriendRequest", "${friendCode}"]`);
    }

    public SetStatus(status: "online" | "ingame"): void {
        this.socket.send(`42["setStatus", "${status}"]`);
    }

    public CreateParty(): void {
        this.socket.send(`42["createParty"]`);
    }

    public DeleteFriend(friendId: string): void {
        this.socket.send(`42["deleteFriend", "${friendId}"]`);
    }

    public Logout(): void {
        this.socket.send(`42["logout"]`);
    }

    public JoinParty(partyKey: string): void {
        this.socket.send(`42["joinParty", "${partyKey}"]`);
    }

    public LeaveParty(): void {
        this.socket.send(`42["leaveParty"]`);
    }

    public Login(userKey: string) {
        this.socket.send(`42["login", "${userKey}"]`);
    }

    public Refresh() {
        this.socket.send(`42["refresh"]`);
    }

    public RejectFriendRequest(friendCode: string): void {
        this.socket.send(`42["rejectFriendRequest", "${friendCode}"]`);
    }

    public RestartPartyMatchmaking(): void {
        this.socket.send(`42["restartPartyMatchmaking"]`);
    }

    public SendClanMessage(clanId: string, message: string): void {
        this.socket.send(`42["sendClanMessage", "${clanId}", "${message}"]`);
    }

    public SendFriendRequest(friendCode: string): void {
        this.socket.send(`42["sendFriendRequest", "${friendCode}"]`);
    }

    public SendPartyInvite(userId: string): void {
        this.socket.send(`42["sendPartyInvite", "${userId}"]`);
    }

    public SendPrivateMessage(friendId: string, message: string): void {
        this.socket.send(
            `42["sendPrivateMessage", "${friendId}", "${message}"]`
        );
    }

    public SetIsInRound(inRound: boolean): void {
        this.socket.send(`42["setIsInRound", "${inRound}"]`);
    }

    public SetName(name: string): void {
        this.socket.send(`42["setName", "${name}"]`);
    }

    public SetPartyAutofill(autofill: boolean): void {
        this.socket.send(`42["setPartyAutofill", "${autofill}"]`);
    }

    public SetPartyGameMode(gameMode: string): void {
        this.socket.send(`42["setPartyGameMode", "${gameMode}"]`);
    }

    public SetPartyRegion(region: string): void {
        this.socket.send(`42["setPartyRegion", "${region}"]`);
    }

    public SetPartyTournamentCode(code: string): void {
        this.socket.send(`42["setPartyTournamentCode", "${code}"]`);
    }

    public SetPartyVersion(version: string): void {
        this.socket.send(`42["setPartyVersion", "${version}"]`);
    }

    public SetPlatform(platform: string): void {
        this.socket.send(`42["setPlatform", "${platform}"]`);
    }

    public SetReady(ready: boolean): void {
        this.socket.send(`42["setReady", "${ready}"]`);
    }

    public SetVersion(version: string): void {
        this.socket.send(`42["setVersion", "${version}"]`);
    }
}
