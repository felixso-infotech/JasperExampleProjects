package com.felixso.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * Author entity.
 * @author Sarangi Balu A
 */
@ApiModel(description = "Author entity. @author Sarangi Balu A")
@Entity
@Table(name = "book")
public class Book implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "date_of_publishing")
    private LocalDate dateOfPublishing;

    @OneToOne    @JoinColumn(unique = true)
    private Media coverPhoto;

    @ManyToOne
    @JsonIgnoreProperties("books")
    private Author author;

    @ManyToMany
    @JoinTable(name = "book_publishers",
               joinColumns = @JoinColumn(name = "books_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "publishers_id", referencedColumnName = "id"))
    private Set<Publisher> publishers = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Book name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDateOfPublishing() {
        return dateOfPublishing;
    }

    public Book dateOfPublishing(LocalDate dateOfPublishing) {
        this.dateOfPublishing = dateOfPublishing;
        return this;
    }

    public void setDateOfPublishing(LocalDate dateOfPublishing) {
        this.dateOfPublishing = dateOfPublishing;
    }

    public Media getCoverPhoto() {
        return coverPhoto;
    }

    public Book coverPhoto(Media media) {
        this.coverPhoto = media;
        return this;
    }

    public void setCoverPhoto(Media media) {
        this.coverPhoto = media;
    }

    public Author getAuthor() {
        return author;
    }

    public Book author(Author author) {
        this.author = author;
        return this;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public Set<Publisher> getPublishers() {
        return publishers;
    }

    public Book publishers(Set<Publisher> publishers) {
        this.publishers = publishers;
        return this;
    }

    public Book addPublishers(Publisher publisher) {
        this.publishers.add(publisher);
        publisher.getBooks().add(this);
        return this;
    }

    public Book removePublishers(Publisher publisher) {
        this.publishers.remove(publisher);
        publisher.getBooks().remove(this);
        return this;
    }

    public void setPublishers(Set<Publisher> publishers) {
        this.publishers = publishers;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Book book = (Book) o;
        if (book.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), book.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Book{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", dateOfPublishing='" + getDateOfPublishing() + "'" +
            "}";
    }
}
