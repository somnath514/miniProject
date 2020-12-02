package com.example.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Enrollment")
public class Enrollment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@NotNull
	@Column(name = "enrollmentId")
	private int enrollmentId;
	
	@OneToOne(
			targetEntity = Users.class, 
			fetch = FetchType.LAZY,
			cascade = CascadeType.ALL			
			)
	@JoinColumn(name = "fk_userId", referencedColumnName = "userId")
	@NotNull
	private int userId;
	
	@OneToOne(
			targetEntity = Batches.class, 
			fetch = FetchType.EAGER,
			cascade = CascadeType.ALL			
			)
	@JoinColumn(name = "fk_batchId", referencedColumnName = "batchId")
	@NotNull
	private int batchId;
	
	@OneToOne(
			targetEntity = Offers.class, 
			fetch = FetchType.EAGER,
			cascade = CascadeType.ALL			
			)
	@JoinColumn(name = "fk_offerId", referencedColumnName = "offerId")
	@NotNull
	private int offerId;
	
	@OneToOne(
			targetEntity = Sports.class, 
			fetch = FetchType.EAGER,
			cascade = CascadeType.ALL			
			)
	@JoinColumn(name = "fk_sportId", referencedColumnName = "sportId")
	@NotNull
	private int sportId;
	
	@NotNull
	@Column(name = "enrollmentStartDate")
	private Date enrollmentStartDate;
	
	@NotNull
	@Column(name = "enrollmentEndDate")
	private Date enrollmentEndDate;
	
	@NotNull
	@Column(name = "enrollmentPayableFees")
	private double enrollmentPayableFees;

	public Enrollment() {
		super();
	}

	public Enrollment(@NotNull int enrollmentId, @NotNull int userId, @NotNull int batchId, @NotNull int offerId,
			@NotNull int sportId, @NotNull Date enrollmentStartDate, @NotNull Date enrollmentEndDate,
			@NotNull double enrollmentPayableFees) {
		super();
		this.enrollmentId = enrollmentId;
		this.userId = userId;
		this.batchId = batchId;
		this.offerId = offerId;
		this.sportId = sportId;
		this.enrollmentStartDate = enrollmentStartDate;
		this.enrollmentEndDate = enrollmentEndDate;
		this.enrollmentPayableFees = enrollmentPayableFees;
	}

	public int getEnrollmentId() {
		return enrollmentId;
	}

	public void setEnrollmentId(int enrollmentId) {
		this.enrollmentId = enrollmentId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getBatchId() {
		return batchId;
	}

	public void setBatchId(int batchId) {
		this.batchId = batchId;
	}

	public int getOfferId() {
		return offerId;
	}

	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}

	public int getSportId() {
		return sportId;
	}

	public void setSportId(int sportId) {
		this.sportId = sportId;
	}

	public Date getEnrollmentStartDate() {
		return enrollmentStartDate;
	}

	public void setEnrollmentStartDate(Date enrollmentStartDate) {
		this.enrollmentStartDate = enrollmentStartDate;
	}

	public Date getEnrollmentEndDate() {
		return enrollmentEndDate;
	}

	public void setEnrollmentEndDate(Date enrollmentEndDate) {
		this.enrollmentEndDate = enrollmentEndDate;
	}

	public double getEnrollmentPayableFees() {
		return enrollmentPayableFees;
	}

	public void setEnrollmentPayableFees(double enrollmentPayableFees) {
		this.enrollmentPayableFees = enrollmentPayableFees;
	}

	@Override
	public String toString() {
		return "Enrollment [enrollmentId=" + enrollmentId + ", userId=" + userId + ", batchId=" + batchId + ", offerId="
				+ offerId + ", sportId=" + sportId + ", enrollmentStartDate=" + enrollmentStartDate
				+ ", enrollmentEndDate=" + enrollmentEndDate + ", enrollmentPayableFees=" + enrollmentPayableFees + "]";
	}
	
	
	
	

}
