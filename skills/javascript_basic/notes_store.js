class NotesStore {
  constructor() {
    this.noteCollection = {};
  }

  addNote(state, name) {
    if (name === "") {
      throw new Error("Name cannot be empty");
    } else if (
      state !== "completed" &&
      state !== "active" &&
      state !== "others"
    ) {
      throw new Error(`Invalid state ${state}`);
    } else {
      this.noteCollection[name] = state;
    }
  }

  getNotes(state) {
    const notesList = [];

    if (state !== "completed" && state !== "active" && state !== "others") {
      throw new Error(`Invalid state ${state}`);
    } else {
      for (const [key, value] of Object.entries(this.noteCollection)) {
        if (state === value) {
          notesList.push(key);
        }
      }
    }

    return notesList;
  }
}
