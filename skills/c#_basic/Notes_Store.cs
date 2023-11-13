public class NotesStore
{
    public IDictionary<string,string> noteCollection = new Dictionary<string, string>();
    
    public NotesStore() {}
    public void AddNote(String state, String name) {
        if(name == ""){
            throw new Exception("Name cannot be empty");
        }else if(state != "completed" && state != "active" && state != "others")
        {
            throw new Exception($"Invalid state {state}");
        }else
        {
            noteCollection.Add(name, state);
        }
        
    }
    public List<String> GetNotes(String state) {
        List<string> li = new List<string>();
        if(state != "completed" && state != "active" && state != "others")
        {
            throw new Exception($"Invalid state {state}");
        }else
        {
            foreach(KeyValuePair<string, string> kvp in noteCollection)
            {
                if(state == kvp.Value){
                    li.Add(kvp.Key);
                }
            }
        }
        return li;
        
    }
} 
