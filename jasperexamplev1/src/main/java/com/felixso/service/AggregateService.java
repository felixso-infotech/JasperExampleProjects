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
package com.felixso.service;

import java.util.HashMap;
import java.util.Map;

import com.felixso.jasper.BookDataBeanList;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

public interface AggregateService {
	
	/**
     * Gets bookReport : using database.
     *			     
     * @return the byte[].
     * 
	 * @throws JRException. 
     */
	
    byte[] getReportAsPdfUsingDataBase()throws JRException;
    
    /**
     * Gets bookReport : using javabean.
     * 
     * @return the byte[].
     * 
     * @throws JRException.
     */
    
     public static byte[] getReportAsPdfUsingJavaBean() throws JRException {
		        
	      JasperReport jr = JasperCompileManager.compileReport("src/main/resources/books_javabean.jrxml");

	      JRBeanCollectionDataSource collectionDatasource = new JRBeanCollectionDataSource(BookDataBeanList.getDataBeanList());
	      			     
	      //Preparing parameters
	      Map<String, Object> parameters = new HashMap<String, Object>();
	    			     
	      JasperPrint jp = JasperFillManager.fillReport(jr, parameters, collectionDatasource);
	     
	      return JasperExportManager.exportReportToPdf(jp);
       
       }

}
