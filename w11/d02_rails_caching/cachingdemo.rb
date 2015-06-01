# def get_my_name
# 	sleep 3
# 	return "adam bray"
# end
#
# puts get_my_name
# puts get_my_name
#
# $cache_store = {}
# def cache(key)
# 	return $cache_store[key] if $cache_store[key]
# 	$cache_store[key] = yield
# end
#
# cache "getting my name" do
# 	get_my_name
# end


$cache_store = {}
def cache(obj)
	key = obj
	return $cache_store[key] if $cache_store[key]
	$cache_store[key] = yield
end


class Car
  attr_accessor :name, :hp

  def initialize(name, hp)
    @name = name
    @hp = hp
  end

  def calculate_gigawatts
    sleep 2 #simulate long calculation
    return (@hp % 6) * 3.14159
  end

  def info
    "#{name} has #{calculate_gigawatts} gigawatts"
  end

end


car1 = Car.new("Delorian", 1000)
car2 = Car.new("Camry", 30)

cache car1, app_cache do
  car1.calculate_gigawatts
end

cache car2, app_cache do
  car2.calculate_gigawatts
end

cache car1, app_cache do
  car1.calculate_gigawatts
end
