package com.felixso.service.mapper;

import com.felixso.domain.*;
import com.felixso.service.dto.PublisherDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Publisher and its DTO PublisherDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PublisherMapper extends EntityMapper<PublisherDTO, Publisher> {


    @Mapping(target = "books", ignore = true)
    Publisher toEntity(PublisherDTO publisherDTO);

    default Publisher fromId(Long id) {
        if (id == null) {
            return null;
        }
        Publisher publisher = new Publisher();
        publisher.setId(id);
        return publisher;
    }
}
