func postHandler(w http.ResponseWriter, req *http.Request) {
    var lake Lake
    if err := json.NewDecoder(req.Body).Decode(&lake); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }
    defer req.Body.Close()

    store[lake.Id] = lake
    w.WriteHeader(http.StatusCreated)
    w.Write([]byte("Lake added successfully"))
}

func deleteHandler(w http.ResponseWriter, req *http.Request) {
    id := req.URL.Query().Get("id")
    if _, exists := store[id]; !exists {
        http.Error(w, "Lake not found", http.StatusNotFound)
        return
    }
    delete(store, id)
    w.WriteHeader(http.StatusOK)
    w.Write([]byte("Lake deleted successfully"))
}

func getHandler(w http.ResponseWriter, req *http.Request) {
    id := req.URL.Query().Get("id")
    lake, exists := store[id]
    if !exists {
        http.Error(w, "Lake not found", http.StatusNotFound)
        return
    }
    jsonResponse, err := json.Marshal(lake)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    w.Header().Set("Content-Type", "application/json")
    w.Write(jsonResponse)
}
