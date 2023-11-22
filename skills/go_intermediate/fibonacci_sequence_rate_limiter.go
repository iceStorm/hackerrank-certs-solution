
// fibonacciModulo generates a Fibonacci sequence with a modulo.
func fibonacciModulo(mod int) func() int {
    a, b := 1, 1 // Correct initial values
    return func() int {
        a, b = b, (a+b)%mod
        return a
    }
}

// ModuloFibonacciSequence generates Fibonacci numbers and sends them to resultChan
// based on requests received from requestChan. It includes a rate limiter.
func ModuloFibonacciSequence(requestChan chan bool, resultChan chan int) {
    fibGen := fibonacciModulo(1e9)
    ticker := time.NewTicker(10 * time.Millisecond)
    
    for {
        _, more := <-requestChan
        if !more {
            close(resultChan)
            ticker.Stop()
            return
        }
        <-ticker.C // Enforce the rate limit
        resultChan <- fibGen()
    }
}
