package bcp.todo;

import java.util.Date;

public class Todo {

    private long id;
    private String userName;
    private String desc;
    private Date targetDate;
    private boolean done;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public Todo(long id, String userName, String desc, Date targetDate, boolean done) {
        this.id = id;
        this.userName = userName;
        this.desc = desc;
        this.targetDate = targetDate;
        this.done = done;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
