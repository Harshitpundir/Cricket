

import java.sql.Statement;
import java.util.ArrayList;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Teams
 */
@WebServlet("/Teams")
public class Teams extends HttpServlet {
	private static final long serialVersionUID = 1L;

	static final String JDBC_Driv="oracle.jdbc.driver.OracleDriver";
	static final String DB_URL = "jdbc:oracle:thin:@localhost:1521:xe";
	static final String USER = "System";
	static final String PASS = "3682";
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/XML");
		PrintWriter out=response.getWriter();
		String Data="";
		int i=0;
		Connection con;
		Statement stmt;
		try{
		Class.forName(JDBC_Driv);
		con=DriverManager.getConnection(DB_URL,USER, PASS);
		stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select * from PlayerInfo ");
		out.print("<Player>");
		
		int j=0;
		while(rs.next()){
			out.println("<Data>");
			out.println("<MatchBtw>"+rs.getString(1)+"</MatchBtw>");
			out.println("<MatchDate>"+rs.getString(2)+"</MatchDate>");
			out.println("<TypeP>"+rs.getString(3)+"</TypeP>");
			out.println("<PlayerName>"+rs.getString(4)+"</PlayerName>");
			out.println("<PrimaryTeam>"+rs.getString(5)+"</PrimaryTeam>");
			out.println("<TeamName>"+rs.getString(6)+"</TeamName>");
			out.println("<Runs>"+rs.getString(7)+"</Runs>");
			out.println("<Balls>"+rs.getString(8)+"</Balls>");
			out.println("<Sixes>"+rs.getString(9)+"</Sixes>");
			out.println("<Fours>"+rs.getString(10)+"</Fours>");
			out.println("<Overs>"+rs.getString(11)+"</Overs>");
			out.println("<RunsBowl>"+rs.getString(12)+"</RunsBowl>");
			out.println("<Wickets>"+rs.getString(13)+"</Wickets>");
			out.println("<MatchType>"+rs.getString(14)+"</MatchType>");
			out.println("<MatchStatus>"+rs.getString(15)+"</MatchStatus>");
			out.println("<PlayerStatus>"+rs.getString(16)+"</PlayerStatus>");
			out.println("</Data>");
			}
		out.print("</Player>");
	}catch(Exception e){
		e.printStackTrace();
	}
		
	}
}
