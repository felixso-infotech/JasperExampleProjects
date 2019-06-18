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
	 * Get the BookDataBean object.
	 *
	 * @param bookName - the name of the book.
	 * @param authorName - name of the author.
	 * @param publisherName - name of the publisher .
	 * 
	 * @return the Object : This method returns a DataBean object, with bookName, authorName, publisherName set in it. 
	 */ 
	
	public static BookDataBean getProduceData(String bookName, String authorName, String publisherName) { 
		
		BookDataBean dataBean = new BookDataBean(); 
		
		dataBean.setBookName(bookName);; 
		
		dataBean.setAuthorName(authorName);; 
		
		dataBean.setPublisherName(publisherName);		
		
		return dataBean; 
		
	} 

	/**
     * Get the BookDataBean object List.
     * 
	 * @param bookName - the name of the book.
	 * @param authorName - name of the author.
	 * @param publisherName - name of the publisher.
	 * 
	 * @return the List : This method returns BookDataBean objectList.  
	 * 
	 */
    public static List<BookDataBean> getProduceDataList(String bookName, String authorName, String publisherName) { 
		
		List<BookDataBean> dataBeanList = new ArrayList<BookDataBean>(); 
				
		dataBeanList.add(new BookDataBean(bookName,authorName,publisherName));
		
		return dataBeanList; 
		
	} 	

	

}
