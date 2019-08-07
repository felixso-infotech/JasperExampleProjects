 /*
 * Copyright 2002-2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.felixso.jasper;

import java.util.ArrayList;
import java.util.List;

import com.felixso.model.BookDataBean;

public class BookDataBeanList {
	
	//private static List<BookDataBean> bookDataBeanList = new ArrayList<BookDataBean>();
	

	/**
     * Get the List of books with dummy data.
	 *  
	 * @return the List : This method returns BookDataBean objectList.  
	 * 
	 */

	public static List<BookDataBean> getDataBeanList() { 
		
		List<BookDataBean> dataBeanList = new ArrayList<BookDataBean>(); 
		
		dataBeanList.add(new BookDataBean("Randamoozham", "M.T.VasudevanNayar", "DC Books")); 
		
		dataBeanList.add(new BookDataBean("PremaLekanam", "Vykam Basheer", "Current Books")); 
		
		dataBeanList.add(new BookDataBean("TwoStates", "Chethan Bagath", "Rupa Publications")); 
		
		dataBeanList.add(new BookDataBean("Harry Potter", "J. K.Rowling", "Scholastic")); 
		
		return dataBeanList; 
		
	} 
	
	
	/**
     * set the BookDataBean object List.
     * 
	 * bookDataBeanList - the list of the BookDataBean.
	 * 
	 * //@return the List : This method returns BookDataBean objectList.  
	 * 
	 */
   /* public List<BookDataBean> setBookDataBeanList(BookDataBean bookDataBean) { 
		
    	bookDataBeanList.add(bookDataBean); 
		
		return bookDataBeanList;		
	} 	*/
    
	/**
     * Get the BookDataBean object List.
     * 
	 * //@return the List : This method returns BookDataBean objectList.  
	 * 
	 */   
   /* public static List<BookDataBean> getBookDataBeanList() { 
		
		return bookDataBeanList; 
		
	}*/
	

}
