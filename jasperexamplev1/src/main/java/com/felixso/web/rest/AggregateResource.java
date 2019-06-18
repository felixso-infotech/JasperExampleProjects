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
package com.felixso.web.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.felixso.service.AggregateService;

import net.sf.jasperreports.engine.JRException;


@RestController
@RequestMapping("/api")
public class AggregateResource {
	
	private final Logger log = LoggerFactory.getLogger(AggregateResource.class);

	private AggregateService aggregateService;

	public AggregateResource(AggregateService aggregateService) {
		this.aggregateService = aggregateService;
	}

	
	/**
	 * GET  /pdf : get the pdf of all books using database.
	 *  
	 * @return the byte[]
	 * @return the ResponseEntity with status 200 (OK) and the pdf of books in body
	 */
	@GetMapping("/pdf")
    public ResponseEntity<byte[]> getReportAsPdfUsingDataBase() {
    	
    	log.debug("REST request to get a pdf");
       
        byte[] pdfContents = null;
      
       try
       {
		pdfContents=aggregateService.getReportAsPdfUsingDataBase();
       }catch (JRException e) {
            e.printStackTrace();
       }
       
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.parseMediaType("application/pdf"));
        String fileName ="books.pdf";
		headers.add("content-disposition", "attachment; filename=" + fileName);
		ResponseEntity<byte[]> response = new ResponseEntity<byte[]>(
		            pdfContents, headers, HttpStatus.OK);	        
        return response;
    }

	
    /**
	 * GET  /pdf/report : get the pdf of all books using javabean.
	 *  
	 * @return the byte[]
	 * @return the ResponseEntity with status 200 (OK) and the pdf of books in body
	 */
	   	
	@GetMapping("/pdf/report")
	public ResponseEntity<byte[]> getReportAsPdfUsingJavaBean() {

		log.debug("REST request to get a pdf of products");

		byte[] pdfContents = null;

		try {
			pdfContents = AggregateService.getReportAsPdfUsingJavaBean();
		} catch (JRException e) {
			e.printStackTrace();
		}
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.parseMediaType("application/pdf"));
		String fileName = "booksReport.pdf";
		headers.add("content-disposition", "attachment; filename=" + fileName);
		ResponseEntity<byte[]> response = new ResponseEntity<byte[]>(pdfContents, headers, HttpStatus.OK);
		return response;

	}
	

}
