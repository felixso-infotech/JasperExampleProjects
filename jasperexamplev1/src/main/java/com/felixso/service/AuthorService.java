package com.felixso.service;

import com.felixso.service.dto.AuthorDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing Author.
 */
public interface AuthorService {

    /**
     * Save a author.
     *
     * @param authorDTO the entity to save
     * @return the persisted entity
     */
    AuthorDTO save(AuthorDTO authorDTO);

    /**
     * Get all the authors.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<AuthorDTO> findAll(Pageable pageable);


    /**
     * Get the "id" author.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<AuthorDTO> findOne(Long id);

    /**
     * Delete the "id" author.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
