package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
    "strings"
    "regexp"
)


/*
 * Complete the 'ModifyString' function below and add imports if needed.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING str as parameter.
 */

func ModifyString(str string) string {
    // Trim leading and trailing spaces
    str = strings.TrimSpace(str)

    // Remove digits from 0 to 9
    re := regexp.MustCompile("[0-9]")
    str = re.ReplaceAllString(str, "")

    // Reverse the string
    runes := []rune(str)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }

    return string(runes)
}

func main() {
    reader := bufio.NewReaderSize(os.Stdin, 16 * 1024 * 1024)

    stdout, err := os.Create(os.Getenv("OUTPUT_PATH"))
    checkError(err)

    defer stdout.Close()

    writer := bufio.NewWriterSize(stdout, 16 * 1024 * 1024)

    str := readLine(reader)

    result := ModifyString(str)

    fmt.Fprintf(writer, "%s\n", result)

    writer.Flush()
}

func readLine(reader *bufio.Reader) string {
    str, _, err := reader.ReadLine()
    if err == io.EOF {
        return ""
    }

    return strings.TrimRight(string(str), "\r\n")
}

func checkError(err error) {
    if err != nil {
        panic(err)
    }
}
