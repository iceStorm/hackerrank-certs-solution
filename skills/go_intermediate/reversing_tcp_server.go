// TCPServer accepts messages from a TCP client, reverses them, and sends the reversed messages back.
func TCPServer(ready chan bool) {
    listener, err := net.Listen("tcp", address)
    if err != nil {
        fmt.Println("Error listening:", err.Error())
        return
    }
    defer listener.Close()

    ready <- true // Signal that the server is ready

    for {
        conn, err := listener.Accept()
        if err != nil {
            fmt.Println("Error accepting connection:", err.Error())
            return
        }

        go handleConnection(conn)
    }
}

func handleConnection(conn net.Conn) {
    defer conn.Close()

    buffer := make([]byte, maxBufferSize)
    n, err := conn.Read(buffer)
    if err != nil {
        fmt.Println("Error reading:", err.Error())
        return
    }

    message := string(buffer[:n])
    reversed := reverseString(message)

    _, err = conn.Write([]byte(reversed))
    if err != nil {
        fmt.Println("Error writing:", err.Error())
        return
    }
}

func reverseString(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}
