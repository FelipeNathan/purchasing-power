require 'test_helper'

class CountryTest < ActiveSupport::TestCase
  
  test "load brasil" do
    assert_equal 'Brasil', Country.where(abbrev: 'BRA').first.name
  end

  test "country saved without abbrev should throw exception" do
    assert_not Country.new.save
    assert_not Country.new(abbrev: 'CAN').save
    assert_not Country.new(name: 'Canadá').save
  end

  test "country saved with valid params" do 
    assert Country.new(abbrev: "CAN", name: "Canada").save
  end

  test "load Canada by its abbrev" do 
    Country.new(abbrev: "CAN", name: "Canada").save

    canada = Country.where(abbrev: "CAN").first

    assert_equal "Canada", canada.name
  end

  test "load Canada by its name" do 
    Country.new(abbrev: "CAN", name: "Canada").save

    canada = Country.where(name: "Canada").first

    assert_equal "CAN", canada.abbrev
  end

  test "ensure saved query dont duplicate" do
    Country.new(abbrev: "CAN", name: "Canada").save
    assert_equal 1, Country.where(name: "Canada").count
  end
end
