package com.example.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Comments")
public class Comments {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@NotNull
	@Column(name = "commentId")
	private int commentId;

	@NotNull
	@ManyToOne(optional = false,targetEntity = Offers.class, 
			fetch = FetchType.LAZY,
			cascade = CascadeType.PERSIST	)
	@JoinColumn(name = "fk_offerId", referencedColumnName = "offerId")
	private int offerId;
	
	
	@NotNull
	@ManyToOne(optional = false,targetEntity = Users.class, 
			fetch = FetchType.LAZY,
			cascade = CascadeType.PERSIST	)
	@JoinColumn(name = "fk_userId", referencedColumnName = "userId")
	private int userId;


	@NotNull
	@Column(name = "Comments")
	private String Comments;


	@NotNull
	@Column(name = "isLiked")
	private boolean isLiked;


	public Comments() {
		super();
	}


	public Comments(@NotNull int commentId, @NotNull int offerId, @NotNull int userId, @NotNull String comments,
			@NotNull boolean isLiked) {
		super();
		this.commentId = commentId;
		this.offerId = offerId;
		this.userId = userId;
		Comments = comments;
		this.isLiked = isLiked;
	}


	public int getCommentId() {
		return commentId;
	}


	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}


	public int getOfferId() {
		return offerId;
	}


	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getComments() {
		return Comments;
	}


	public void setComments(String comments) {
		Comments = comments;
	}


	public boolean isLiked() {
		return isLiked;
	}


	public void setLiked(boolean isLiked) {
		this.isLiked = isLiked;
	}


	@Override
	public String toString() {
		return "Comments [commentId=" + commentId + ", offerId=" + offerId + ", userId=" + userId + ", Comments="
				+ Comments + ", isLiked=" + isLiked + "]";
	}


}
