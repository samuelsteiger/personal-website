package com.example.demo;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class BlogPost {
    long bid;
    

    String title;
    String author;
    String date;
    String time;
    String text;

    public BlogPost(int bid) {
        JSONParser parser = new JSONParser();
        System.out.println("Working Directory = " + System.getProperty("user.dir"));

        try {     
            JSONArray obj = (JSONArray) parser.parse(new FileReader("./src/main/resources/static/blog_posts.json"));
            JSONObject jsonObject = (JSONObject) obj.get(0);

            this.bid = (long) jsonObject.get("bid");
            this.title = (String) jsonObject.get("title");
            this.author = (String) jsonObject.get("author");
            this.date = (String) jsonObject.get("date");
            this.time = (String) jsonObject.get("time");
            this.text = (String) jsonObject.get("text");

        
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    public long getBid() {
        return bid;
    }

    public void setBid(long bid) {
        this.bid = bid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

}
