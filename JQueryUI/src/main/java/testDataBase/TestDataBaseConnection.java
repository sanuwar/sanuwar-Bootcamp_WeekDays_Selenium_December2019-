package testDataBase;

import databases.ConnectToSqlDB;

import java.io.IOException;
import java.sql.SQLException;

public class TestDataBaseConnection {
    public static void main (String[] args) throws IOException, SQLException, ClassNotFoundException{
        ConnectToSqlDB a = new ConnectToSqlDB();
        a.connectToSqlDatabase();
    }
}
