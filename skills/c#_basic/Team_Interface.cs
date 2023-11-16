public class Team {
    public string teamName;
    public int noOfPlayers;
    
    public Team(string name, int players) {
        this.teamName = name;
        this.noOfPlayers = players;
    }
    
    public void AddPlayer(int count) {
        this.noOfPlayers += count;
    }
    
    public bool RemovePlayer(int count) {
        int afterRemoved = this.noOfPlayers - count;
        
        if (afterRemoved < 0) {
            return false;
        }

        this.noOfPlayers = afterRemoved;
        return true;
    }
}

public class Subteam: Team {
    public Subteam(string name, int players): base(name, players) {}
    
    public void ChangeTeamName(string newName) {
        this.teamName = newName;
    } 
}
