package com.felixso.service;

import com.felixso.service.dto.PublisherDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing Publisher.
 */
public interface PublisherService {

    /**
     * Save a publisher.
     *
     * @param publisherDTO the entity to save
     * @return the persisted entity
     */
    PublisherDTO save(PublisherDTO publisherDTO);

    /**
     * Get all the publishers.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<PublisherDTO> findAll(Pageable pageable);


    /**
     * Get the "id" publisher.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<PublisherDTO> findOne(Long id);

    /**
     * Delete the "id" publisher.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
