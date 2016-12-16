package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	d, e := template.ParseFiles("index.html")
	if e != nil {
		fmt.Print(e)
	}
	// defer func() {
	// 	err := recover()
	// 	if err != nil {
	// 		http.Error(w, "Internal server error", 500)
	// 		fmt.Println(err)
	// 		return
	// 	}
	// }()
	d.Execute(w, nil)
}

// func loginHandler(handler http.Handler) http.Handler {
// 	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
// 		t1 := time.Now()
// 		handler.ServeHTTP(w, r)
// 		t2 := time.Now()
// 		status := w.Header().Get("code")
// 		w.Header().Del("code")
// 		log.Printf("[%s] %q %v - %s\n", r.Method, r.URL.String(), t2.Sub(t1), status)
//
// 	})
// }
//
// // Put params in context for sharing them between handlers
// func wrapHandler(next http.Handler) httprouter.Handle {
// 	return func(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
// 		ctx := context.WithValue(r.Context(), "params", ps)
// 		next.ServeHTTP(w, r.WithContext(ctx))
// 	}
// }
func getHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello you are getting result from server http get method")
	w.Header().Set("Access-Control-Allow-Origin", "*")
}
func postHandler(w http.ResponseWriter, r *http.Request) {
	v := r.FormValue("name")
	reqBytes, _ := ioutil.ReadAll(r.Body)
	type User struct {
		Name  string
		Name2 string
	}
	user := User{}
	fmt.Print(user, string(reqBytes))
	error := json.Unmarshal(reqBytes, &user)
	if error != nil {
		fmt.Println("\nError in Decoding:", error)
	} else {
		fmt.Printf("\n%+v\n", user)
	}
	// w.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Println("value", v, string(reqBytes), user)
	fmt.Fprintf(w, "helllo you are getting result from post method you sent this :%s %v", v, string(reqBytes))
}
func main() {
	router := http.NewServeMux()
	router.HandleFunc("/", indexHandler)
	router.HandleFunc("/get", getHandler)
	router.Handle("/src/", http.StripPrefix("/src/", http.FileServer(http.Dir("src"))))
	router.HandleFunc("/post/", postHandler)
	log.Fatal(http.ListenAndServe(":8000", router))
}
