package com.example.demo;

public class Note {
    int nid;
    String name;
    String email;
    String text;

    public Note() {

    }

    public int getNid() {
        return nid;
    }

    public void setNid(int nid) {
        this.nid = nid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "Note [nid=" + nid + ", name=" + name + ", email=" + email + ", text=" + text + "]";
    }

    
}
