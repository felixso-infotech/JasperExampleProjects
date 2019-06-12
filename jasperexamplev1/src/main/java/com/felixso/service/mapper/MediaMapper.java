package com.felixso.service.mapper;

import com.felixso.domain.*;
import com.felixso.service.dto.MediaDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Media and its DTO MediaDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface MediaMapper extends EntityMapper<MediaDTO, Media> {



    default Media fromId(Long id) {
        if (id == null) {
            return null;
        }
        Media media = new Media();
        media.setId(id);
        return media;
    }
}
