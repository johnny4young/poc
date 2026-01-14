package testing101

import "testing"

func TestAdd(t *testing.T) {
	want := 5
	got := Add(2, 3)
	if got != want {
		t.Logf("Se esperaba %d, se obtuve %d", want, got)
		t.Fail()
	}
}
