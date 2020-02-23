package databases;

import java.util.ArrayList;
import java.util.List;

public class sqlTable {
    public static List<String> searchElements(){
        List<String> elements=new ArrayList<String>();
        elements.add("Aamazon");
        elements.add("Apple");
        elements.add("Mobile");
        return elements;
    }

    public static int[] name={1,4,5,6};


    public static void main(String[] args) throws Exception {

        System.out.println(searchElements());
        ConnectToSqlDB.insertDataFromArrayListToSqlTable(searchElements(),"sanuwar","search");
        //ConnectToSqlDB.insertDataFromArrayToSqlTable(name,"names","st");

        System.out.println(ConnectToSqlDB.readDataBase("sanuwar","search"));
    }
}
